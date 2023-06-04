import {
  GlobalTheme,
  Header,
  HeaderName,
  Content,
  Heading,
  Section,
  Link,
  UnorderedList,
  ListItem,
} from '@carbon/react';
import classNames from './App.module.scss';

function App() {
  return (
    <GlobalTheme theme="g100">
      <Header aria-label="Carbon minimal template">
        <HeaderName href="#" prefix="Carbon">
          Template
        </HeaderName>
      </Header>
      <Content>
        <Heading>Carbon minimal template</Heading>
        <p>
          Start editing <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          Check{' '}
          <Link
            href="https://react.carbondesignsystem.com/?path=/story/getting-started-welcome--welcome"
            target="_blank"
          >
            Carbon&apos;s Storybook
          </Link>{' '}
          for the entire list of available components
        </p>
        <p>
          For Carbon full docs, check{' '}
          <Link href="https://carbondesignsystem.com/" target="_blank">
            here
          </Link>
        </p>
        <p>
          Interesting links:
          <UnorderedList>
            <ListItem>
              <Link
                href="https://carbondesignsystem.com/guidelines/spacing/overview/"
                target="_blank"
              >
                Spacing tokens
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://carbondesignsystem.com/guidelines/typography/type-sets/"
                target="_blank"
              >
                Font tokens
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://carbondesignsystem.com/guidelines/2x-grid/overview/"
                target="_blank"
              >
                Grid tokens
              </Link>
            </ListItem>
          </UnorderedList>
        </p>
        <Section className={classNames.section}>
          <Heading>Section heading</Heading>
          <Section>
            <Heading>Inner section heading</Heading>
          </Section>
        </Section>
      </Content>
    </GlobalTheme>
  );
}

export {App};
