import { View, Text, Image, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>

      <Image
        source={{ uri: "https://i.imgur.com/fiHsQtX.png" }}
        style={styles.image}
      />

      <Text style={styles.name}>Gabriel Taboza</Text>

      <Text style={styles.bio}>
         Meu nome é Gabriel Soares Taboza e tenho 28 anos.
         Sou estudante de Sistemas para Internet e apaixonado por tecnologia.
         Gosto de viajar, conhecer pessoas novas e aprender coisas novas, como idiomas e Inteligência Artificial.
</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000"
  },

  bio: {
    marginTop: 10,
    textAlign: "center",
    color: "#333"
  }
});