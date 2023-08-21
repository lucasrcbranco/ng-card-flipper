import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-flipper',
  templateUrl: './card-flipper.component.html',
  styleUrls: ['./card-flipper.component.scss'],
})
export class CardFlipperComponent implements OnInit {
  public cards: Array<ICard> = [];

  ngOnInit(): void {
    this.generateCards(5);
  }

  public enabledCard: number | null = null;

  private generateCards(amount: number): void {
    for (let index = 0; index < amount; index++) {
      this.cards.push({ enabled: false });
    }
  }

  public flipCard(position: number): void {
    this.unflipAllCards();
    this.cards[position].enabled = true;
    this.enabledCard = position;
  }

  public unflipAllCards(): void {
    for (let card of this.cards) {
      card.enabled = false;
    }
  }
}

type ICard = {
  enabled: boolean;
};
