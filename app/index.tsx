import { View } from "react-native";
import { Card } from 'react-native-paper';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card style={{ width: 300, elevation: 4, borderBlockColor: 'blue' }}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card>
    </View>
  );
}
