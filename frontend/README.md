# DataFlow - Sistema de Gerenciamento de Registros

Sistema simples e intuitivo para gerenciamento de registros, permitindo criar, visualizar, editar e excluir informações com praticidade.

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- Axios 1.7.7
- React Hook Form 7.53.1
- Zod 3.23.8

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── main.tsx           # Entry point
│   ├── App.tsx            # Componente raiz
│   ├── router.tsx         # Configuração de rotas
│   └── providers.tsx      # Providers globais
├── core/                   # Componentes e lógica compartilhada
│   ├── components/        # Componentes UI genéricos
│   ├── lib/              # Configurações de bibliotecas
│   ├── utils/            # Funções utilitárias
│   └── types/            # Tipos TypeScript globais
├── domain/                # Domínios de negócio
├── pages/                 # Páginas da aplicação
│   └── layouts/          # Layouts compartilhados
└── assets/               # Recursos estáticos
    └── styles/           # Estilos globais
```

## Instalação

```bash
# Instalar dependências
npm install

# Copiar arquivo de ambiente
cp .env.example .env

# Configurar variáveis de ambiente no .env
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Lint
npm run lint
```

## Funcionalidades

- ✅ Interface Intuitiva: Interface amigável e responsiva
- ✅ Busca Avançada: Filtros e busca por múltiplos critérios
- ✅ Gestão de Registros: CRUD completo
- ✅ Validação de Dados: Validação robusta com Zod
- ✅ Estado Global: Gerenciamento com TanStack Query

## API Integration

O frontend se conecta ao backend através de dois clientes HTTP:

- **publicClient**: Endpoints públicos (`/api/v1/external`)
- **authenticatedClient**: Endpoints autenticados (`/api/v1/internal`)

## Convenções de Código

- Componentes em PascalCase
- Hooks com prefixo `use`
- Arquivos de tipos com sufixo `.types.ts`
- Estilos com Tailwind CSS
- Documentação JSDoc obrigatória

## Licença

MIT