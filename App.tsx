import { View } from "react-native";
//Menu
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

//FONTE
import {
	useFonts,
	OldStandardTT_400Regular,
	OldStandardTT_400Regular_Italic,
	OldStandardTT_700Bold,
} from "@expo-google-fonts/old-standard-tt";

//Tela do Sobre
import Sobre from "./telas/Sobre";

//Tela de Produtos (lista)
import Produtos from "./telas/Produtos/Index";
import ListaProdutos from "./telas/mocks/listaPrdutos";

//Tela de Perfil
import Perfil from "./telas/Perfil/Index";

function MenuProdutos() {
	return <Produtos {...ListaProdutos} />;
}

//Configuraçâo do Menu
const Tab = createBottomTabNavigator();

//Cria a estrutura do Menu
function Menu() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color }) => {
					let iconName;

					if (route.name === "Sobre") {
						iconName = focused ? "heart" : "heart-outline";
					} else if (route.name === "Produtos") {
						iconName = focused ? "bag" : "bag-outline";
					} else if (route.name === "Perfil") {
						iconName = focused ? "person" : "person-outline";
					}
					return <Ionicons name={iconName} size={24} color={color} />;
				},
				headerShown: false,
				tabBarActiveTintColor: "#0d147eff",
				tabBarInactiveTintColor: "black",
			})}
		>
			<Tab.Screen name="Sobre" component={Sobre} />
			<Tab.Screen name="Produtos" component={MenuProdutos} />
			<Tab.Screen name="Perfil" component={Perfil} />
		</Tab.Navigator>
	);
}

export default function App() {
	//CARREGA FONTE
	const [fonteCarregada] = useFonts({
		Old: OldStandardTT_400Regular,
		"Old 2": OldStandardTT_400Regular_Italic,
		"Old 3": OldStandardTT_700Bold,
	});

	//Verificar se a fonte foi carregada
	if (!fonteCarregada) {
		return <View></View>;
	}

	return (
		<NavigationContainer>
			<Menu />
		</NavigationContainer>
	);
}
