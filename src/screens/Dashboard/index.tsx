import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

import { ResumeCard } from "../../components/ResumeCard";


import {styles} from './styles';

export function Dashboard(){
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.containerHeaderIcone}>
          <View style={styles.containerUser}>
            <Image 
              style={styles.image}
              source={{uri:'https://github.com/fabioabrantes.png'}}
            />

            <View style={styles.containerGreeting}>
              <Text style={styles.greeting}>Olá</Text>
              <Text style={styles.name}>Fábio</Text>
            </View>
          </View>

          <View style={styles.icone}>
            <AntDesign name="poweroff" size={24} color="white" />
          </View>
        </View>
      </View>

      <ScrollView 
        style={styles.resumeCards}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginHorizontal:24}}
      >
        <ResumeCard
          type="entry"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 03 de abril"
          nameIcon="arrow-up-circle"
        />

        <ResumeCard
          type="out"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 04 de abril"
          nameIcon="arrow-down-circle"
        />

        <ResumeCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 04 de abril"
          nameIcon="dollar-sign"
        />
      </ScrollView>

      <View style={styles.transactionsContainer}>
        <Text>Listagem</Text>
        
        <FlatList 
          data={[]}
          keyExtractor={(item)=>item}
          renderItem={()=>{
            return (<></>)
          }}
        />

      </View>
    </View>
  )
}