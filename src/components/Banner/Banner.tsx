import styles from './Banner.module.css';
import type { LayoutText } from 'custom-types';
import _layoutText from '@info/layout-text.json';
import devfileLogo from '@public/images/devfileLogo.svg';
import { Text, TextContent, TextVariants, Brand } from '@patternfly/react-core';
import { useRouter } from 'next/router';
import { Wave } from '@src/components';

const layoutText = _layoutText as LayoutText;

export const Banner: React.FC = () => {
  const router = useRouter();
  return (
    <>
      {router.asPath === '/' ? (
        <>
          <Wave fill="darker" backgroundColor="dark" />
          <div className={styles.banner}>
            <Brand src={devfileLogo} alt="Devfile Registry Logo" className={styles.logo} />
            <TextContent>
              <Text className={styles.headerText} component={TextVariants.h1}>
                {layoutText.bannerTitle}
              </Text>
              <Text className={styles.bodyText} component={TextVariants.h3}>
                {layoutText.bannerBody}
              </Text>
            </TextContent>
          </div>
        </>
      ) : (
        <Wave fill="darker" backgroundColor="light" />
      )}
    </>
  );
};
Banner.displayName = 'Banner';
