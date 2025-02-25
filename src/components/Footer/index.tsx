import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'Aip个人开发出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '后端源码',
          title: '后端源码',
          href: 'https://github.com/Agan-ippe/user-center-backend',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/Agan-ippe',
          blankTarget: true,
        },
        {
          key: 'Blog',
          title: 'Blog',
          href: '',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
