import React, { Component } from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default class SelfPlan extends Component {
  render() {
    return (
      <Card style={{ marginHorizontal: 20, borderRadius: 20 }}>
        <Card.Content>
          <Title>Discover your symptoms. </Title>
          <Paragraph>
            Carpe Med allows you to check nearby hospitals so you dont have to
            worry. Live with confidence.
          </Paragraph>
        </Card.Content>
        <Card.Cover source={require('../assets/self.jpeg')} />
        <Card.Actions>
          <Button
            onPress={() => {
              this.props.navigation.navigate('SymptomsScreen');
            }}
          >
            Ok
          </Button>
        </Card.Actions>
      </Card>
    );
  }
}
