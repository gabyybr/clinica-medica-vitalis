import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Clínica Médica Vitalis',
  description: 'Documentação do Sistema de Gestão Clínica',

  themeConfig: {
    nav: [
      { text: 'Início', link: '/' },
      {
        text: 'GitHub',
        link: 'https://github.com/seuusuario/clinica-vitalis-docs',
      },
    ],

    sidebar: [
      {
        text: 'Documentação',
        items: [
          { text: 'Introdução – Minimundo', link: '/documentos/introducao' },
          { text: 'Descrição do Projeto', link: '/documentos/descricao' },
          {
            text: 'Funcionalidades Principais',
            link: '/documentos/funcionalidades',
          },
          {
            text: 'Diagramas de Caso de Uso e Classes',
            link: '/documentos/diagramas',
          },
          { text: 'Protótipos de Telas', link: '/documentos/prototipos' },
          { text: 'Cronograma e Entrega', link: '/documentos/cronograma' },
          { text: 'Riscos e Mitigação', link: '/documentos/riscos' },
          { text: 'Custos e Orçamento', link: '/documentos/custos' },
          { text: 'Considerações Finais', link: '/documentos/conclusao' },
        ],
      },
    ],

    footer: {
      message: 'Projeto acadêmico desenvolvido no IFSC Chapecó',
      copyright: '© 2025 Gabriely Ramos – Todos os direitos reservados',
    },
  },
});
