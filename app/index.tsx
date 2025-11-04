import { Image, Text, View } from "react-native";
import coffee_background from '@/assets/images/coffee_background.png'

export default function Index() {
  return (
    <View>
      <View className="flex w-full">
        <Image source={coffee_background} alt="coffee_home_img" className="object-cover w-screen h-auto aspect-square" />
      </View>
      <Text className="text-white">Coffee so good, your taste buds will love it.</Text>
      <Text className="text-white">The best grain, the finest roast, the powerful flavor.</Text>
    </View>
  );
}
