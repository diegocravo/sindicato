import * as React from 'react';
import { View, StyleSheet, Linking } from 'react-native';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


const MyComponent = () => (

  <View>
  <Card style={styles.card}>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
  </Card>

  <Card style={styles.card}>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
  </Card>

  <Card style={styles.card}>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
  </Card>

  </View>
);

export default MyComponent;

const styles = StyleSheet.create({
  card: {
      marginTop: 30,
    backgroundColor: 'white'
  }
})