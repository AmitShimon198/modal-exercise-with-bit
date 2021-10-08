import React from 'react';
import { Card } from './card';
import { Button } from '@reuse-react-components/experimenting.ui.button';
import { Header } from '@reuse-react-components/experimenting.ui.header';
import { Hr } from '@reuse-react-components/experimenting.ui.hr';
import { MainContent } from '@reuse-react-components/experimenting.ui.main-content';
import classes from './card.module.css';
import { Text } from '@reuse-react-components/experimenting.ui.text';

export const CardContainer = ({ children }) => (
  <Card>{children}</Card>
);

export const FancyCard = ({ onOkClickHandler, onCancelClickHandler }) => (
  <Card >
    <Header className={classes.fancyCardHeader}>
      Example Card
    </Header>
    <Hr />
    <MainContent className={classes.fancyCardMainContent}>
      <Text>Main Content</Text>
    </MainContent>
    <Button onClick={onOkClickHandler}><span>Ok</span></Button>
    <Button onClick={onCancelClickHandler}><span>Cancel</span></Button>
  </Card>
);
