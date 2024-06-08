import {PreludeCard} from '../prelude/PreludeCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {played} from '../Options';

export class DeepSpaceOperations extends PreludeCard {
  constructor() {
    super({
      name: CardName.DEEP_SPACE_OPERATIONS,
      tags: [Tag.SPACE],

      behavior: {
        stock: {titanium: 4},
        drawCard: {count: 2, tag: Tag.SPACE, type: CardType.EVENT},
      },

      metadata: {
        cardNumber: 'P08',
        renderData: CardRenderer.builder((b) => {
          b.titanium(4).br;
          b.cards(2, {secondaryTag: Tag.EVENT}).super((sb) => sb.space({played}));
        }),
        description: 'Gain 4 titanium. Draw 2 event cards with a space tag.',
      },
    });
  }
}

