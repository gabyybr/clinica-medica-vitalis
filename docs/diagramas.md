# Diagramas do Sistema Clínica Médica Vitalis

##  Diagrama de Caso de Uso

![Diagrama de Caso de Uso](./imagens/diagramacasosdeusoclinica.png)

O diagrama acima representa as interações entre os três atores do sistema:

- **Paciente**
- **Médico**
- **Administrador**

Cada ator acessa funcionalidades específicas de acordo com suas permissões no sistema.

---

# ✔ Caso de Uso 1 — Agendar Consulta

**Atores:** Paciente  
**Descrição Geral:** Permite ao paciente visualizar médicos, escolher horário disponível e confirmar o agendamento.

### ✔ Pré-condições
- O paciente deve estar logado.  
- Médicos e horários devem estar cadastrados.  

### ✔ Fluxo Principal
1. O paciente acessa o menu *Agendamentos*.  
2. O sistema lista especialidades.  
3. O paciente escolhe um médico.  
4. O sistema mostra os horários disponíveis.  
5. O paciente seleciona o horário.  
6. O sistema confirma o agendamento.  
7. O sistema envia notificação ao paciente.

### ✔ Fluxos Alternativos
- **4A:** Se não houver horários disponíveis, o sistema exibe mensagem.  
- **6A:** Falha na conexão → o sistema pede para tentar novamente.  

### ✔ Pós-condições
- Consulta registrada na agenda do médico e do paciente.

---

# ✔ Caso de Uso 2 — Registrar Evolução Médica

**Atores:** Médico  
**Descrição Geral:** Permite registrar informações de atendimento no prontuário do paciente.

### ✔ Pré-condições
- O médico deve estar logado.  
- Deve existir uma consulta vinculada ao paciente.  

### ✔ Fluxo Principal
1. O médico acessa *Consultas do Dia*.  
2. O sistema lista pacientes atendidos.  
3. O médico seleciona o paciente.  
4. O sistema abre o formulário de evolução.  
5. O médico registra diagnóstico, condutas e observações.  
6. O médico anexa exames (opcional).  
7. O sistema salva o prontuário atualizado.

### ✔ Fluxos Alternativos
- **5A:** Campo obrigatório vazio → o sistema exibe alerta.  
- **6A:** Falha no upload → salva sem anexos.  

### ✔ Pós-condições
- Evolução salva no prontuário e disponível para consultas futuras.

---

##  Diagrama de Classes

![Diagrama de Classes](./imagens/diagramadeclassesClinica.png)

O diagrama apresenta as seguintes entidades:

- **Paciente**
- **Médico**
- **Consulta**
- **Prontuário**
- **Exame**
- **Prescrição**

### ✔ Principais relações
- Paciente — 1..* → Consulta  
- Médico — 1..* → Consulta  
- Consulta — 1 → Prontuário  
- Prontuário — 0..* → Exames  
- Prontuário — 0..* → Prescrições

Essas relações organizam a estrutura do sistema de forma clara e consistente para manter o histórico clínico completo.

