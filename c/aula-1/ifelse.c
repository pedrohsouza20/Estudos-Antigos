#include <stdio.h>
#include <stdlib.h>
#include <ctype.h> 

int main() {
	char c;
	printf("Digite uma letra: ");
	scanf("%c", &c);
	
	if(c >= 'a'){
		printf("o retorno maiusculo e  %c ", toupper(c));
	}
	
	return 0;
}
