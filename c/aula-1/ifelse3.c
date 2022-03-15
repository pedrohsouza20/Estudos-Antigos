#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

int main() {
	float note1, note2, note3, note4;
	
	printf("digite a primeira nota: ");
	scanf("%f", &note1);
	
	printf("digite a segunda nota: ");
	scanf("%f", &note2);
	
	printf("digite a terceira nota: ");
	scanf("%f", &note3);
	
	printf("digite a quarta nota: ");
	scanf("%f", &note4);
	
	int notesMedia = ((note1 + note2 + note3 +note4) / 4);
	
	if(notesMedia >= 7){;
		printf("voce esta aprovado");
	}
	else{
		printf("voce esta reprovado");
	}
	
	return 0;
}
