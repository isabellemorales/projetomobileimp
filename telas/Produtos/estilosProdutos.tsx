import { StyleSheet, Dimensions } from "react-native";

// Paleta Imp
// Ocean Deep Blue:  #5D769B
// Warm Sandy Beige: #C8B39B
// Ivory Breeze:     #FBEFE5

const LARGURA = Dimensions.get("window").width;

const estilosProdutos = StyleSheet.create({
	corFundo: {
		backgroundColor: "#FBEFE5",
		maxHeight: "100%"
	},

	// ── Header ──────────────────────────────────────────────────
	header: {
		backgroundColor: "#5D769B",
		paddingTop: 52,
		paddingBottom: 18,
		paddingHorizontal: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	headerLogo: {
		width: 80,
		height: 40,
	},
	headerTitulo: {
		fontFamily: "Old 3",
		fontSize: 26,
		color: "#FBEFE5",
		letterSpacing: 3,
	},
	headerSubtitulo: {
		fontFamily: "Old 2",
		fontSize: 12,
		color: "#C8B39B",
		letterSpacing: 2,
		marginTop: 2,
	},

	// ── Barra de busca ──────────────────────────────────────────
	buscaContainer: {
		marginHorizontal: 14,
		marginTop: 12,
		marginBottom: 8,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#fff",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#C8B39B",
		paddingHorizontal: 12,
		paddingVertical: 8,
	},
	buscaTexto: {
		fontFamily: "Old",
		fontSize: 14,
		color: "#5D769B",
		flex: 1,
		marginLeft: 8,
	},

	// ── Pills de categoria ──────────────────────────────────────
	filtrosContainer: {
		paddingHorizontal: 1,
		gap: 8,
		flexDirection: "row",
	},
	pill: {
		paddingHorizontal: 14,
		paddingVertical: 10,
		height: 40, 
		marginBottom: 20,
		borderRadius: 99,
		borderWidth: 1,
		borderColor: "#C8B39B",
		backgroundColor: "#fff",
	},
	pillAtivo: {
		backgroundColor: "#5D769B",
		borderColor: "#5D769B",
	},
	pillTexto: {
		fontFamily: "Old",
		fontSize: 18,
		color: "#5D769B",
	},
	pillTextoAtivo: {
		color: "#FBEFE5",
	},

	// ── Contagem ────────────────────────────────────────────────
	contagemTexto: {
		fontFamily: "Old",
		fontSize: 12,
		color: "#C8B39B",
		paddingHorizontal: 14,
		paddingBottom: 6,
		letterSpacing: 1,
	},

	// ── Grid ────────────────────────────────────────────────────
	gridContainer: {
		paddingHorizontal: 10
	},
	coluna: {
		justifyContent: "space-between",
	},

	// ── Card ────────────────────────────────────────────────────
	cardWrapper: {
		width: (LARGURA - 32) / 2,
		marginBottom: 12,
	},
	card: {
		height: 320,
		borderWidth: 1,
		borderColor: "#C8B39B",
		backgroundColor: "#fff",
		borderRadius: 14,
		overflow: "hidden",
	},
	capaCard: {
		height: 160,
		borderRadius: 0,
	},
	cardContent: {
		paddingTop: 8,
		paddingBottom: 4,
	},
	nomeProdutoCard: {
		fontFamily: "Old 3",
		fontSize: 14,
		color: "#5D769B",
		paddingBottom: 2,
	},
	descProdutoCard: {
		fontFamily: "Old",
		fontSize: 11,
		color: "#C8B39B",
		paddingBottom: 4,
	},
	preco: {
		fontFamily: "Old 3",
		fontSize: 14,
		color: "#5D769B",
		paddingTop: 2,
	},
	cardActions: {
		justifyContent: "space-between",
		paddingHorizontal: 8,
		paddingBottom: 8,
	},

	// ── Botões do Card ──────────────────────────────────────────
	botao: {
		backgroundColor: "#5D769B",
		borderRadius: 6,
		paddingVertical: 5,
		paddingHorizontal: 12,
	},
	textoBotao: {
		fontFamily: "Old",
		fontSize: 14,
		color: "#FBEFE5",
		textAlign: "center",
	},
	botaoFav: {
		borderWidth: 1,
		borderColor: "#5D769B",
		borderRadius: 6,
		paddingVertical: 5,
		paddingHorizontal: 8,
		backgroundColor: "#FBEFE5",
	},

	// ── Modal — centralizado, tamanho fixo ──────────────────────
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(93,118,155,0.55)",
	},
	modal: {
		backgroundColor: "#FBEFE5",
		borderRadius: 20,
		overflow: "hidden",
		borderWidth: 2,
		borderColor: "#5D769B",
		paddingBottom: 20,
	},
	nomeProduto: {
		fontFamily: "Old 3",
		color: "#5D769B",
		fontSize: 20,
		paddingBottom: 2,
		paddingHorizontal: 16,
		paddingTop: 4,
	},
	descProduto: {
		fontFamily: "Old",
		color: "#C8B39B",
		fontSize: 13,
		paddingBottom: 2,
		paddingHorizontal: 16,
	},
	precoModal: {
		fontFamily: "Old 3",
		color: "#5D769B",
		fontSize: 18,
		paddingBottom: 10,
		paddingHorizontal: 16,
	},
	botaoModal: {
		alignSelf: "flex-end",
		padding: 12,
	},

	// ── Slider sem borda, imagem preenche tudo ──────────────────
	sliderContainer: {
		overflow: "hidden",
	},
	imagemSlider: {
		height: 240,
		borderRadius: 0,
	},

	// ── Bolinhas indicadoras ────────────────────────────────────
	indicadores: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 10,
		gap: 6,
	},
	bolinha: {
		width: 7,
		height: 7,
		borderRadius: 99,
		backgroundColor: "#C8B39B",
	},
	bolinhaAtiva: {
		backgroundColor: "#5D769B",
		width: 18,
	},

	// ── Botão Encomendar ────────────────────────────────────────
	botaoEncomendar: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#5D769B",
		borderRadius: 10,
		paddingVertical: 12,
		marginHorizontal: 16,
		marginTop: 14,
		gap: 8,
	},
	botaoEncomendarTexto: {
		fontFamily: "Old 3",
		fontSize: 14,
		color: "#FBEFE5",
		letterSpacing: 1,
	},

	// ── Misc ────────────────────────────────────────────────────
	imagem: {
		width: "95%",
		alignSelf: "center",
	},
	container: {
		flex: 1,
	},
	page: {
		justifyContent: "center",
		alignItems: "center",
	},
});

export default estilosProdutos;
