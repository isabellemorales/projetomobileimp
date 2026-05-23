import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRoute } from "@react-navigation/native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import TextoPadrao from "../../componentes/TextoPadrao";
import Styles from "../../telas/Perfil/estilosPerfil";

export default function Perfil() {
	// Variável de estado: câmera traseira ou frontal
	const [facing, setFacing] = useState<CameraType>('back');

	// Variável de estado: permissões da câmera
	const [permission, requestPermission] = useCameraPermissions();
	{
		/* Estado dos campos do perfil */
	}
	const [nome, setNome] = useState("");
	const [telefone, setTelefone] = useState("");
	const [email, setEmail] = useState("");

	{
		/* Controle da aba ativa */
	}
	const [abaAtiva, setAbaAtiva] = useState("perfil");

	{
		/* Mensagem do chat */
	}
	const [mensagem, setMensagem] = useState("");
	const [conversa, setConversa] = useState<string[]>([]);

	{
		/* Recebe parâmetros da navegação (vindo do botão Encomendar) */
	}
	const route = useRoute<any>();

	{
		/* Se veio do botão Encomendar, abre conversa e pré-preenche a mensagem */
	}
	useEffect(() => {
		if (route.params?.abrirConversa) {
			setAbaAtiva("conversas");
			if (route.params?.produto) {
				setMensagem("Olá! Gostaria de encomendar: " + route.params.produto);
			}
		}
	}, [route.params]);

	{
		/* Envia mensagem na conversa */
	}
	function enviarMensagem() {
		if (mensagem.trim() === "") return;
		setConversa([...conversa, mensagem.trim()]);
		setMensagem("");
	}

	if (!permission) {
		return <View />;
	}

	if (!permission.granted) {
		return (
			<View style={Styles.container}>
				<TextoPadrao style={Styles.headerSubtitulo}>
					Precisamos da sua autorização para exibir a câmera
				</TextoPadrao>
				<TouchableOpacity onPress={requestPermission}>
					<TextoPadrao>Permitir</TextoPadrao>
				</TouchableOpacity>
			</View>
		);
	}

	function toggleCameraFacing() {
		setFacing(current => (current === 'back' ? 'front' : 'back'));
	}

	return (
		<View style={Styles.corFundo}>
			{/* Header */}
			<View style={Styles.header}>
				<Ionicons name="person-circle-outline" size={44} color="#FBEFE5" />
				<View>
					<TextoPadrao estiloEspecifico={Styles.headerTitulo}>
						Meu Perfil
					</TextoPadrao>
					<TextoPadrao estiloEspecifico={Styles.headerSubtitulo}>
						IMP moda praia
					</TextoPadrao>
				</View>
			</View>

			{/* Abas */}
			<View style={Styles.abas}>
				<TouchableOpacity
					style={[Styles.aba, abaAtiva === "perfil" && Styles.abaAtiva]}
					onPress={() => setAbaAtiva("perfil")}
				>
					<TextoPadrao
						estiloEspecifico={[
							Styles.abaTexto,
							abaAtiva === "perfil" && Styles.abaTextoAtivo,
						]}
					>
						Perfil
					</TextoPadrao>
				</TouchableOpacity>

				<TouchableOpacity
					style={[Styles.aba, abaAtiva === "conversas" && Styles.abaAtiva]}
					onPress={() => setAbaAtiva("conversas")}
				>
					<TextoPadrao
						estiloEspecifico={[
							Styles.abaTexto,
							abaAtiva === "conversas" && Styles.abaTextoAtivo,
						]}
					>
						Conversas
					</TextoPadrao>
				</TouchableOpacity>
			</View>

			{/* ── ABA PERFIL ──────────────────────────────────────── */}
			{abaAtiva === "perfil" && (
				<ScrollView contentContainerStyle={Styles.conteudo}>
					{/* ===== CÂMERA ===== */}
					<CameraView facing={facing} style={Styles.camera}>
						<View style={Styles.cameraContainer}>
							<TouchableOpacity
								style={Styles.cameraVirarBotao}
								onPress={toggleCameraFacing}>
								<Ionicons name="reload" size={30} color="#5D769B" />
							</TouchableOpacity>
						</View>
					</CameraView>

					<TextoPadrao estiloEspecifico={Styles.labelSecao}>
						Dados pessoais
					</TextoPadrao>

					{/* Campo Nome */}
					<View style={Styles.campoWrapper}>
						<Ionicons
							name="person-outline"
							size={18}
							color="#C8B39B"
							style={Styles.campoIcone}
						/>
						<TextInput
							style={Styles.campo}
							placeholder="Seu nome completo"
							placeholderTextColor="#C8B39B"
							value={nome}
							onChangeText={setNome}
						/>
					</View>

					{/* Campo Telefone */}
					<View style={Styles.campoWrapper}>
						<Ionicons
							name="call-outline"
							size={18}
							color="#C8B39B"
							style={Styles.campoIcone}
						/>
						<TextInput
							style={Styles.campo}
							placeholder="(00) 00000-0000"
							placeholderTextColor="#C8B39B"
							keyboardType="phone-pad"
							value={telefone}
							onChangeText={setTelefone}
						/>
					</View>

					{/* Campo E-mail */}
					<View style={Styles.campoWrapper}>
						<Ionicons
							name="mail-outline"
							size={18}
							color="#C8B39B"
							style={Styles.campoIcone}
						/>
						<TextInput
							style={Styles.campo}
							placeholder="seu@email.com"
							placeholderTextColor="#C8B39B"
							keyboardType="email-address"
							autoCapitalize="none"
							value={email}
							onChangeText={setEmail}
						/>
					</View>

					{/* Botão Salvar */}
					<TouchableOpacity style={Styles.botaoSalvar}>
						<TextoPadrao estiloEspecifico={Styles.botaoSalvarTexto}>
							Salvar dados
						</TextoPadrao>
					</TouchableOpacity>
				</ScrollView>
			)}

			{/* ── ABA CONVERSAS ───────────────────────────────────── */}
			{abaAtiva === "conversas" && (
				<View style={Styles.conversaContainer}>
					<TextoPadrao estiloEspecifico={Styles.labelSecao}>
						Fale conosco para fazer seu pedido 🌊
					</TextoPadrao>

					{/* Histórico de mensagens */}
					<ScrollView
						style={Styles.historicoScroll}
						contentContainerStyle={Styles.historico}
					>
						{conversa.length === 0 && (
							<TextoPadrao estiloEspecifico={Styles.semMensagens}>
								Nenhuma mensagem ainda. Diga ola! 👋
							</TextoPadrao>
						)}
						{conversa.map((msg, i) => (
							<View key={i} style={Styles.bolha}>
								<TextoPadrao estiloEspecifico={Styles.bolhaTexto}>
									{msg}
								</TextoPadrao>
							</View>
						))}
					</ScrollView>

					{/* Input de mensagem */}
					<View style={Styles.inputMensagemWrapper}>
						<TextInput
							style={Styles.inputMensagem}
							placeholder="Digite sua encomenda..."
							placeholderTextColor="#C8B39B"
							value={mensagem}
							onChangeText={setMensagem}
						/>
						<TouchableOpacity
							style={Styles.botaoEnviar}
							onPress={enviarMensagem}
						>
							<Ionicons name="send" size={18} color="#FBEFE5" />
						</TouchableOpacity>
					</View>
				</View>
			)}
		</View>
	);
}
