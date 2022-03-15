#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <conio.h>

int main(){
	//definicao das variaveis
	float num1 = num2 = result = 0;
	char op = '0';
	 
	do{
		//setando valores das variaveis para 0
		num1, num2, result = 0;
		printf("\n\n\n\n\t\t\t >>>>>>>>Smart Calculator<<<<<<<<\n\n\n\n");
		
		printf("\n (1) somar\n");
		printf(" (2) subtrair\n");
		printf(" (3) multiplicar\n");
		printf(" (4) dividir\n");
		printf(" (0) sair do programa\n");
		
		printf("\n informe o numero da operacao desejada: \n");
		printf("\n\t\t\t>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> \n");
		
		// variavel op(operacao) recebe o numero de operacao desejada pelo usuario
		op = getche();
		
		printf("\n\n\n");
		
		
		//faz os calculos se op for diferente de 0
		if(op != '0'){
			//ler os numeros digitados pelo usuario
			printf("\tdigite o primeiro numero: >>> ");
			scanf("%f", &num1);
			printf("\tdigite o segundo numero : >>> ");
			scanf("%f", &num2);
			
			//soma
			if(op == '1'){
			result = num1 + num2;
			}
			//subtracao
			else if(op == '2'){
				result = num1 - num2;
			}
			//multiplicacao
			else if(op == '3'){
				result = num1 * num2;
			}
			//divisao
			else if(op == '4'){
				result = num1 / num2;
			}
		}
		
		printf("\n\n\no resultado da operacao e: %f\n\n", result);
		
		//limpa a tela a cada finalizacao de operacao
		system("pause");
		system("cls");
		
	}while( op != '0'); //se op (operacao desejada) for == '0', fecha a aplicacao;
	
	return 0;
	
}
