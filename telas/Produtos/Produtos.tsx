import React, { useState } from "react";
import { Card } from "react-native-paper";
import {
	Modal,
	View,
	TouchableOpacity,
	FlatList,
	Dimensions,
	Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import TextoPadrao from "../../componentes/TextoPadrao";
import Styles from "../../telas/Produtos/estilosProdutos";

const LARGURA = Dimensions.get("window").width;
const ALTURA = Dimensions.get("window").height;

export default function Produtos({
	item: { id, nome, descricao, preco, imagem, imagemModal },
}: any) {
	{
		/* Hook para ação de abrir e fechar do Card */
	}
	const [statusModal, acaoAbreFecha] = useState(false);

	{
		/* Hook para favoritar */
	}
	const [favoritado, setFavoritado] = useState(false);

	{
		/* Índice atual do slider */
	}
	const [indiceSlider, setIndiceSlider] = useState(0);

	{
		/* Navegação para a aba Perfil */
	}
	const navigation = useNavigation<any>();

	{
		/* Largura do slider = largura do modal */
	}
	const larguraModal = LARGURA * 0.9;
	const alturaSlider = ALTURA * 0.35;

	function encomendar() {
		acaoAbreFecha(false);
		navigation.navigate("Perfil", { abrirConversa: true, produto: nome });
	}

	return (
		<View style={Styles.cardWrapper}>
			<Card mode="elevated" style={Styles.card}>
				{/* Imagem de capa */}
				<Card.Cover source={imagem} style={Styles.capaCard}></Card.Cover>

				<Card.Content style={Styles.cardContent}>
					<TextoPadrao estiloEspecifico={Styles.nomeProdutoCard}>
						{nome}
					</TextoPadrao>
					<TextoPadrao estiloEspecifico={Styles.descProdutoCard}>
						{descricao}
					</TextoPadrao>
					<TextoPadrao estiloEspecifico={Styles.preco}>{preco}</TextoPadrao>
				</Card.Content>

				<Card.Actions style={Styles.cardActions}>
					{/* Botão favoritar */}
					<TouchableOpacity
						style={Styles.botaoFav}
						onPress={() => setFavoritado(!favoritado)}
					>
						<Ionicons
							name={favoritado ? "heart" : "heart-outline"}
							size={18}
							color="#5D769B"
						/>
					</TouchableOpacity>

					{/* Botão que abre o Modal */}
					<TouchableOpacity
						style={Styles.botao}
						onPress={() => acaoAbreFecha(true)}
					>
						<TextoPadrao estiloEspecifico={Styles.textoBotao}>
							<Ionicons name="list" size={12} color="#FBEFE5" />
						</TextoPadrao>
					</TouchableOpacity>
				</Card.Actions>
			</Card>

			{/* Modal centralizado com tamanho fixo */}
			<Modal animationType="fade" transparent={true} visible={statusModal}>
				<View style={Styles.modalContainer}>
					<View style={[Styles.modal, { width: larguraModal }]}>
						{/* Botão fechar */}
						<TouchableOpacity
							onPress={() => acaoAbreFecha(false)}
							style={Styles.botaoModal}
						>
							<Ionicons name="close" size={28} color="#5D769B" />
						</TouchableOpacity>

						<TextoPadrao estiloEspecifico={Styles.nomeProduto}>
							{nome}
						</TextoPadrao>
						<TextoPadrao estiloEspecifico={Styles.descProduto}>
							{descricao}
						</TextoPadrao>
						<TextoPadrao estiloEspecifico={Styles.precoModal}>
							{preco}
						</TextoPadrao>

						{/* Slider — imagem preenche sem borda, sem corte */}
						<View
							style={[
								Styles.sliderContainer,
								{ width: larguraModal, height: alturaSlider },
							]}
						>
							<FlatList
								data={imagemModal}
								horizontal
								pagingEnabled
								showsHorizontalScrollIndicator={false}
								keyExtractor={(_, i) => String(i)}
								onMomentumScrollEnd={(e) => {
									const novoIndice = Math.round(
										e.nativeEvent.contentOffset.x / larguraModal
									);
									setIndiceSlider(novoIndice);
								}}
								renderItem={({ item }) => (
									<Image
										source={item}
										style={{ width: larguraModal, height: alturaSlider }}
										resizeMode="cover"
									/>
								)}
							/>
						</View>

						{/* Bolinhas indicadoras */}
						<View style={Styles.indicadores}>
							{imagemModal.map((_: any, i: number) => (
								<View
									key={i}
									style={[
										Styles.bolinha,
										i === indiceSlider && Styles.bolinhaAtiva,
									]}
								/>
							))}
						</View>

						{/* Botão Encomendar */}
						<TouchableOpacity
							style={Styles.botaoEncomendar}
							onPress={encomendar}
						>
							<Ionicons
								name="chatbubble-ellipses-outline"
								size={16}
								color="#FBEFE5"
							/>
							<TextoPadrao estiloEspecifico={Styles.botaoEncomendarTexto}>
								Encomendar
							</TextoPadrao>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
}
