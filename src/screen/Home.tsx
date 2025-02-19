import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App'; // Adjust the import path as needed
import React from 'react';
import { SafeAreaView, TouchableOpacity , Text, FlatList} from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';
import { useData } from '../hooks/postData';
import { PostCard } from '../ components/Postcard';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ route, navigation }: HomeProps) => {
  const { name } = route.params;
  const { posts } = useData();
  return (
    <SafeAreaView className="flex justify-center items-center flex-1">
      <Text className="flex justify-center items-center flex-auto">Home {name}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.push('Settings');
        }}
      >
        <Icon name="settings" size={24} color="black" />
      </TouchableOpacity>
      <FlatList
      data={posts}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <PostCard postId={item.id} />}
    />
    </SafeAreaView>
  );
};

export default Home;