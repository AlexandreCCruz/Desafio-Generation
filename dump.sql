create table usuarios (
  id serial primary key,
  nome text,
  idade integer,
  nota_do_primeiro_semestre text,
  nota_do_segundo_semestre text,
  nome_do_professor text,
  numero_da_sala integer
);