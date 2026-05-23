import React, { useState } from "react";
import {
	FlatList,
	View,
	TextInput,
	ScrollView,
	TouchableOpacity,
	Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import TextoPadrao from "../../componentes/TextoPadrao";
import CadaProduto from "../Produtos/Produtos";
import Styles from "../Produtos/estilosProdutos";

{
	/* Categorias com label (exibição) e valor (comparação sem acento) */
}
const CATEGORIAS = [
	{ label: "Todos", valor: "Todos" },
	{ label: "Biquínis", valor: "Biquinis" },
	{ label: "Saídas", valor: "Saidas" },
	{ label: "Acessórios", valor: "Acessorios" },
	{ label: "Chapéus", valor: "Chapeus" },
];

export default function Index({ itens }: any) {
	{
		/* Hook para busca */
	}
	const [busca, setBusca] = useState("");

	{
		/* Hook para categoria ativa */
	}
	const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
	{
		/* Filtra por busca E categoria — usa o campo categoria do mock */
	}
	const listaFiltrada = itens.lista.filter((produto: any) => {
		const matchBusca = produto.nome.toLowerCase().includes(busca.toLowerCase());
		const matchCategoria =
			categoriaAtiva === "Todos" || produto.categoria === categoriaAtiva;
		return matchBusca && matchCategoria;
	});

	return (
		<View style={Styles.corFundo}>
			{/* Header com logo */}
			<View style={Styles.header}>
				<Image
					source={require("../../assets/logo.png")}
					style={Styles.headerLogo}
					resizeMode="contain"
				/>
				<Ionicons name="bag-outline" size={26} color="#FBEFE5" />
			</View>

			{/* Barra de busca */}
			<View style={Styles.buscaContainer}>
				<Ionicons name="search-outline" size={18} color="#C8B39B" />
				<TextInput
					style={Styles.buscaTexto}
					placeholder="Buscar produtos..."
					placeholderTextColor="#C8B39B"
					value={busca}
					onChangeText={setBusca}
				/>
				{busca.length > 0 && (
					<TouchableOpacity onPress={() => setBusca("")}>
						<Ionicons name="close-circle-outline" size={18} color="#C8B39B" />
					</TouchableOpacity>
				)}
			</View>

			{/* Pills de categoria */}
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={true}
				contentContainerStyle={Styles.filtrosContainer}
			>
				{CATEGORIAS.map((cat) => (
					<TouchableOpacity
						key={cat.valor}
						style={[
							Styles.pill,
							categoriaAtiva === cat.valor && Styles.pillAtivo,
						]}
						onPress={() => setCategoriaAtiva(cat.valor)}
					>
						<TextoPadrao
							estiloEspecifico={[
								Styles.pillTexto,
								categoriaAtiva === cat.valor && Styles.pillTextoAtivo,
							]}
						>
							{cat.label}
						</TextoPadrao>
					</TouchableOpacity>
				))}
			</ScrollView>

			{/* Contagem de produtos */}
			<TextoPadrao estiloEspecifico={Styles.contagemTexto}>
				{listaFiltrada.length} produto{listaFiltrada.length !== 1 ? "s" : ""}{" "}
				encontrado{listaFiltrada.length !== 1 ? "s" : ""}
			</TextoPadrao>

			{/* Grid 2 colunas */}
			<FlatList
				data={listaFiltrada}
				numColumns={2}
				renderItem={({ item }) => <CadaProduto item={item} />}
				keyExtractor={(item) => String(item.id)}
				contentContainerStyle={Styles.gridContainer}
				showsVerticalScrollIndicator={false}
				columnWrapperStyle={Styles.coluna}
			/>
		</View>
	);
}
