import {register} from '@/services/ant-design-pro/api';
import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProFormText,
} from '@ant-design/pro-components';
import { message, Tabs } from 'antd';
import React, { useState } from 'react';
import { history } from 'umi';
import styles from './index.less';
import {SYSTEM_LOGO} from "@/components/constants";

const Register: React.FC = () => {
  const [type, setType] = useState<string>('account');

  // 表单提交
  const handleSubmit = async (values: API.RegisterParams) => {
    // 校验
    const { userPassword, checkPassword} = values;
    if (userPassword !== checkPassword) {
      message.error('两次密码不一致');
      return;
    }
    try {
      // 注册
      const id = await register(values);
      if ( id > 0 ) {
        const defaultLoginSuccessMessage = '注册成功！';
        message.success(defaultLoginSuccessMessage);
        /** 此方法会跳转到 redirect 参数所在的位置 */
        if (!history) return;
        const { query } = history.location;
        history.push({
          pathname: '/user/login',
          query,
        });
        return;
      }else {
        throw new Error(`id: ${id}`);
      }
    } catch (error: any) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      message.error(error.message ?? defaultLoginFailureMessage);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          submitter={{
            searchConfig: {
              submitText: '注册'
            }
          }}
          logo={<img alt="logo" src={SYSTEM_LOGO} />}
          title="User Center"
          subTitle={'Aip User Center 一个平平无奇的用户中心'}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.RegisterParams);
          }}
        >
          <Tabs activeKey={type} onChange={setType}>
            <Tabs.TabPane key="account" tab={'注册账号'} />
          </Tabs>

          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请输入账号'}
                rules={[
                  {
                    required: true,
                    message: '必填项！',
                  },
                  {
                    min: 5,
                    max: 15,
                    type: "string",
                    message: '请输入长度为5-15的账号',
                  },
                ]}
              />

              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '必填项！',
                  },
                  {
                    min: 8,
                    max: 20,
                    type: "string",
                    message: '请输入长度为8-20的密码',
                  },
                ]}
              />

              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请再次输入密码'}
                rules={[
                  {
                    required: true,
                    message: '必填项！',
                  },
                  {
                    min: 8,
                    max: 20,
                    type: "string",
                    message: '请输入长度为8-20的密码',
                  },
                ]}
              />
            </>
          )}

          <div
            style={{
              marginBottom: 24,
            }}
          >
          </div>
        </LoginForm>
      </div>
    </div>
  );
};
export default Register;
