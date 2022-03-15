#include <stdio.h>

//calculadora de media

int main(void) {
	float notes[5] = {0};
	float notesSum = 0;
	float notesMedia = 0;
	
	printf("Digite as 5 notas: \n");
	
	for (int i = 0; i < 5; ++i){
		scanf("%f", &notes[i]);
		notesSum += notes[i];
	}

	for	(int i = 0; i < 5; ++i){
		notesMedia = notesSum / i;
	}
	
	printf("a soma das notas e igual a: %f", notesSum);
	printf("a media e: %f", notesMedia);
	
}
