import { FlatList } from "react-native";
import { CATEGORIES } from '../data/dummy-data';

function renderCategoryItem(){
  return ;
}

export default function CategoriesScreen() {
  return (
    <FlatList  
      data={CATEGORIES}
      keyExtractor={(item)=> item.id}
      renderItem={renderCategoryItem} 
    />
  )
}
