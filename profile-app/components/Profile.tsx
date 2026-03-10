import { View, Text, Image, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      
      <Image
        source={{ uri: "https://i.imgur.com/fiHsQtX.png" }}
        style={styles.image}
      />

      <Text style={styles.nome}>Gabriel Taboza</Text>

      <Text style={styles.bio}>
        Meu nome é Gabriel Soares Taboza, tenho 28 anos. 
        Sou estudante de Sistemas para Internet e atualmente estou me jogando na tecnologia.
        Também gosto de viajar, conhecer pessoas novas e viver momentos e lugares. 
        Estou sempre em busca de aprender algo novo como idiomas e novas informações sobre IA. 
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 40
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 75
  },

  nome: {
    fontSize: 20,
    marginTop: 10
  },

  bio: {
    marginTop: 10,
    textAlign: "center",
    paddingHorizontal: 20
  }
});