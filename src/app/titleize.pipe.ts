import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleize'
})

export class TitleizePipe implements PipeTransform {
  public static skipWords = ['of', 'the', 'a', 'in', 'an', 'or'];

  transform(sentence: string, alternateSmall?: string[], processSmall?: boolean ): string {
    if (typeof sentence !== 'string') {
      return sentence;
    }

    processSmall = processSmall === undefined;
    if (processSmall === true) {

      let wordsToSkip: string[] = TitleizePipe.skipWords;
      if (alternateSmall && alternateSmall.length > 0) {
        wordsToSkip = alternateSmall;
      }

      return sentence.replace(/\w[^-\s]*/g, (word, idx) => {
        if (wordsToSkip.includes(word.toLowerCase())) {
            return (idx === 0) ? word : word.toLowerCase();
        } else {
          return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        }
      });

    } else {

      return sentence.replace(/\w[^-\s]*/g, (word, idx) => {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
      });
    }
  }
}
