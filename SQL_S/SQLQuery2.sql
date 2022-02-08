CREATE TABLE PRODUTOS(
	CODIGO			INT			NOT NULL,
	DESCRICAO		VARCHAR(50) NOT NULL,
	DATA_VALIDADE	DATETIME,
	EAN				VARCHAR(15) NOT NULL,  --CODIGO DE BARRA
	IND_INATIVO		INT			NOT NULL DEFAULT 0
);

ALTER TABLE			PRODUTOS 
	ADD CONSTRAINT	PK_PRODUTOS
		PRIMARY KEY (CODIGO)   --PRA TORNAR O C�DIGO PRIMARIO
;

CREATE INDEX IDX_PRODUTOS_EAN
	ON PRODUTOS(EAN)
;

INSERT INTO PRODUTOS VALUES (1, 'NOME DO PRODUTO', GETDATE(), '1234567890', 0);

INSERT INTO PRODUTOS(CODIGO, DESCRICAO, EAN) VALUES (2, 'NOME DO PRODUTO 2', '1234567890');

SELECT * 
	FROM PRODUTOS
	WHERE CODIGO = 2;

SELECT COUNT(*) AS TOTAL
	FROM PRODUTOS

CREATE TABLE LOJA(
	CODIGO			INT			NOT NULL,
	NOME			VARCHAR(50) NOT NULL,
	IND_INATIVO		INT			NOT NULL DEFAULT 0,
	CONSTRAINT		LOJA_PK PRIMARY KEY(CODIGO)
);

INSERT INTO LOJA(CODIGO, NOME) VALUES (1000, 'FILAL NOVA FLORIAN�POLIS');
INSERT INTO LOJA(CODIGO, NOME) VALUES (2000, 'FILAL NOVA S�O PAULO');
INSERT INTO LOJA(CODIGO, NOME) VALUES (3000, 'FILAL NOVA JO�O PESSOA');

SELECT * FROM LOJA;

CREATE TABLE ESTOQUE(
	CODIGO_PRODUTO	INT NOT NULL,
	CODIGO_FILIAL	INT NOT NULL,
	QUANTIDADE		DECIMAL NOT NULL DEFAULT 0,
	CONSTRAINT		ESTOQUE_PK PRIMARY KEY(CODIGO_PRODUTO, CODIGO_FILIAL)
);

ALTER TABLE ESTOQUE 
	ADD CONSTRAINT FK_ESTOQUE_PRODUTOS
		FOREIGN KEY (CODIGO_PRODUTO)
		REFERENCES PRODUTOS(CODIGO)
;

ALTER TABLE ESTOQUE 
	ADD CONSTRAINT FK_ESTOQUE_LOJA
		FOREIGN KEY (CODIGO_FILIAL)   --CHAVE ESTRANGEIRA
		REFERENCES LOJA(CODIGO)
;

INSERT INTO ESTOQUE (CODIGO_PRODUTO, CODIGO_FILIAL, QUANTIDADE) VALUES (1, 1000, 10);

SELECT * FROM ESTOQUE 

--DROP � PARA APAGAR ALGO

SELECT E.CODIGO_FILIAL,
		L.NOME,
		E.CODIGO_PRODUTO,
		P.DESCRICAO,
		E.QUANTIDADE

	FROM ESTOQUE E INNER JOIN LOJA L
		ON E.CODIGO_FILIAL = L.CODIGO
		INNER JOIN PRODUTOS P
		ON E.CODIGO_PRODUTO = P.CODIGO









