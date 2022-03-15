#include <stdio.h>
#include <stdlib.h>

int main() {
	int num1, num2, sum;
	printf("por favor, digite um numero:");
	scanf("%i", &num1);	
	
	printf("por favor, digite outro numero:");
	scanf("%i", &num2);
	
	sum = num1 + num2;
	
	printf("O resultado da soma e: %i \n", sum);
	
	system("pause");
	return 0;
}
