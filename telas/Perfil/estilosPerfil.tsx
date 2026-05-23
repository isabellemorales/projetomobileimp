import { StyleSheet } from "react-native";

// Paleta Imp
// Ocean Deep Blue:  #5D769B
// Warm Sandy Beige: #C8B39B
// Ivory Breeze:     #FBEFE5

const estilosPerfil = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 25
	},

	camera: {
		width: '100%',
		height: '80%',
		alignSelf: 'center',
	},
	cameraContainer: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'transparent',
	},
	cameraVirarBotao: {
		position: 'absolute',
		bottom: 10,
		left: 20,
	},

	corFundo: {
		flex: 1,
		backgroundColor: "#FBEFE5",
	},

	// ── Header ──────────────────────────────────────────────────
	header: {
		backgroundColor: "#5D769B",
		paddingTop: 52,
		paddingBottom: 20,
		paddingHorizontal: 20,
		flexDirection: "row",
		alignItems: "center",
		gap: 14,
	},
	headerTitulo: {
		fontFamily: "Old 3",
		fontSize: 22,
		color: "#FBEFE5",
		letterSpacing: 2,
	},
	headerSubtitulo: {
		fontFamily: "Old 2",
		fontSize: 12,
		color: "#C8B39B",
		letterSpacing: 2,
		marginTop: 2,
	},

	// ── Abas ────────────────────────────────────────────────────
	abas: {
		flexDirection: "row",
		borderBottomWidth: 2,
		borderBottomColor: "#C8B39B",
		backgroundColor: "#fff",
	},
	aba: {
		flex: 1,
		paddingVertical: 12,
		alignItems: "center",
	},
	abaAtiva: {
		borderBottomWidth: 3,
		borderBottomColor: "#5D769B",
	},
	abaTexto: {
		fontFamily: "Old",
		fontSize: 14,
		color: "#C8B39B",
		letterSpacing: 1,
	},
	abaTextoAtivo: {
		color: "#5D769B",
		fontFamily: "Old 3",
	},

	// ── Conteúdo Perfil ──────────────────────────────────────────
	conteudo: {
		padding: 20,
		paddingBottom: 40,
	},
	labelSecao: {
		fontFamily: "Old 3",
		fontSize: 14,
		color: "#5D769B",
		letterSpacing: 1,
		marginBottom: 14,
		marginTop: 4,
	},

	// ── Campos ───────────────────────────────────────────────────
	campoWrapper: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#C8B39B",
		borderRadius: 10,
		marginBottom: 14,
		paddingHorizontal: 12,
	},
	campoIcone: {
		marginRight: 8,
	},
	campo: {
		flex: 1,
		fontFamily: "Old",
		fontSize: 14,
		color: "#5D769B",
		paddingVertical: 12,
	},

	// ── Botão Salvar ─────────────────────────────────────────────
	botaoSalvar: {
		backgroundColor: "#5D769B",
		borderRadius: 10,
		paddingVertical: 13,
		alignItems: "center",
		marginTop: 6,
	},
	botaoSalvarTexto: {
		fontFamily: "Old 3",
		fontSize: 14,
		color: "#FBEFE5",
		letterSpacing: 1,
	},

	// ── Aba Conversas ────────────────────────────────────────────
	conversaContainer: {
		flex: 1,
		padding: 16,
	},
	historicoScroll: {
		flex: 1,
		marginTop: 8,
		marginBottom: 10,
	},
	historico: {
		paddingBottom: 10,
		gap: 8,
	},
	semMensagens: {
		fontFamily: "Old 2",
		fontSize: 14,
		color: "#C8B39B",
		textAlign: "center",
		marginTop: 30,
	},
	bolha: {
		alignSelf: "flex-end",
		backgroundColor: "#5D769B",
		borderRadius: 14,
		borderBottomRightRadius: 2,
		paddingHorizontal: 14,
		paddingVertical: 8,
		maxWidth: "80%",
	},
	bolhaTexto: {
		fontFamily: "Old",
		fontSize: 13,
		color: "#FBEFE5",
		lineHeight: 18,
	},

	// ── Input mensagem ───────────────────────────────────────────
	inputMensagemWrapper: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#C8B39B",
		borderRadius: 10,
		paddingHorizontal: 12,
		paddingVertical: 4,
	},
	inputMensagem: {
		flex: 1,
		fontFamily: "Old",
		fontSize: 13,
		color: "#5D769B",
		paddingVertical: 10,
	},
	botaoEnviar: {
		backgroundColor: "#5D769B",
		borderRadius: 8,
		padding: 8,
		marginLeft: 8,
	},
});

export default estilosPerfil;
0