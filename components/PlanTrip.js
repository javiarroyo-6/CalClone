import React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const PlanTrip = props => (
  <Card style={{ marginHorizontal: 20, borderRadius: 20 }}>
    <Card.Content>
      <Title>Plan with confidence. </Title>
      <Paragraph>
        Carpe Med allows you to check nearby hospitals so you dont have to
        worry. Live with confidence.
      </Paragraph>
    </Card.Content>
    <Card.Cover source={require('../assets/plantrip.jpeg')} />
    <Card.Actions>
      <Button onPress={() => alert('I will do something one day I promise!')}>
        Ok
      </Button>
    </Card.Actions>
  </Card>
);

export default PlanTrip;
