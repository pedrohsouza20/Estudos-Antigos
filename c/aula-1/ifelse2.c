#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

int main(){
	int i;
	printf("Digite um numero: ");
	scanf("%i", &i);
	
	if(i > 10){
		printf("o numero e maior que 10");
	}
	else{
		printf("o numero e menor que 10");
	}
	
}
