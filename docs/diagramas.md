# 📊 Diagramas do Sistema Clínica Médica Vitalis

## 🧩 Diagrama de Caso de Uso

![Diagrama de Caso de Uso](../imagens/diagramacasosdeusoclinica.png)

**Figura 1 – Diagrama de Caso de Uso**

O diagrama de caso de uso apresenta as principais interações entre os três perfis do sistema:  
**Administrador**, **Médico** e **Paciente**.

Cada ator possui suas funções específicas:

- O **Administrador** realiza o cadastro de usuários, médicos, pacientes e especialidades, além de gerar relatórios administrativos e financeiros.
- O **Médico** acessa sua agenda, registra evolução médica, emite prescrições e solicita exames.
- O **Paciente** agenda, reagenda ou cancela consultas, visualiza exames e prontuário, recebe notificações e utiliza o chat online.

Os relacionamentos `<<include>>` e `<<extend>>` indicam dependências e variações entre os processos (por exemplo, “Gerar relatório de atendimentos” é uma extensão do caso de uso “Gerar relatórios administrativos”).

---

## 🧱 Diagrama de Classes

![Diagrama de Classes](../imagens/diagramadeclassesClinica.png)

**Figura 2 – Diagrama de Classes**

O diagrama de classes representa a estrutura lógica do sistema e os relacionamentos entre as entidades principais:  
**Paciente**, **Médico**, **Consulta**, **Prontuário**, **Exame** e **Prescrição**.

Principais relações:

- A classe **Paciente** possui associação *1 para 0..*** com **Consulta**, pois um paciente pode ter várias consultas.
- Cada **Consulta** é realizada por um **Médico** e gera exatamente um **Prontuário**.
- O **Prontuário** pode conter vários **Exames** e várias **Prescrições**, que compõem o histórico clínico completo.

Essas relações foram definidas segundo o padrão UML, garantindo clareza e consistência na modelagem do sistema.

---

> 💡 *Ambos os diagramas foram produzidos com base no minimundo da Clínica Médica Vitalis, utilizando boas práticas de modelagem UML e representando fielmente a estrutura e os comportamentos do sistema.*

