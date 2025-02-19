Um aplicativo desenvolvido em React Native que permite aos usuários navegar e reproduzir músicas populares, exibindo informações como título, artista e imagem do álbum.

🎯 Funcionalidades
Lista de Músicas: Exibe músicas populares organizadas em diferentes categorias.
Player de Músicas: Reproduz vídeos do YouTube integrados via o componente react-native-youtube-iframe.
Navegação Intuitiva: Implementação de navegação entre telas utilizando a biblioteca @react-navigation/native.
Design Responsivo: Interface estilosa e adaptável para diversos dispositivos móveis.

🛠 Tecnologias Utilizadas
React Native: Framework principal para desenvolvimento do app.
React Navigation: Gerenciamento de navegação.
FlatList e ScrollView: Exibição de listas de músicas e navegação horizontal.
react-native-linear-gradient: Para efeitos de gradiente no layout.
react-native-vector-icons: Adição de ícones estilizados no painel de controle do player.
react-native-youtube-iframe: Integração com vídeos do YouTube para reprodução de músicas.

📂 Estrutura de Arquivos
r
Copiar
Editar
src/
├── c/
│   ├── lista/          # Tela principal com a lista de músicas.
│   ├── pagMusic/       # Tela de reprodução de músicas.
│
├── assets/             # Ícones e imagens utilizados no app.
│
├── styles/             # Estilização separada por componente.
│
App.js                  # Arquivo principal do projeto.

🚀 Como Executar
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-repositorio/MusicApp.git
cd MusicApp
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie o app:

bash
Copiar
Editar
npm start
Execute no emulador ou dispositivo físico:

Para Android:
bash
Copiar
Editar
npm run android
Para iOS:
bash
Copiar
Editar
npm run ios

📋 Bibliotecas Importantes
@react-navigation/native: Navegação entre telas.
react-native-youtube-iframe: Player embutido para vídeos do YouTube.
react-native-vector-icons: Ícones personalizados para o painel de controle.
react-native-linear-gradient: Gradientes para enriquecer o design.

📦 Futuras Melhorias
Adicionar funcionalidade de busca de músicas.
Implementar listas personalizadas criadas pelo usuário.
Integração com APIs de música para sincronização de dados.

💡 Desenvolvedor:
Projeto criado com amor por Isaque Severino. 🖤
