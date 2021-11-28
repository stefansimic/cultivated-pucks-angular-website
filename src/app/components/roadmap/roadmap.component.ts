import { Component, OnInit } from '@angular/core';

interface ListItem {
  amountOfPucksText: string,
  description: string
}
@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
  public listItems: ListItem[];
  private texts: string[][] = [
    [
      "10% (500 CP's): ", 
      "20% (1000 CP's): ", 
      "30% (1500 CP's): ", 
      "40% (2000 CP's): ", 
   //   "50% (2500 CP's): ", 
   //   "60% (3000 CP's): ", 
   //   "70% (3500 CP's): ", 
   //   "80% (4000 CP's): ", 
   //   "90% (4500 CP's): ", 
   //   "100% (5000 CP's): "
      "50%-100%: "
    ],
    [
      'Finish and release the "Day it all begun" special drop combined with the release of more background knowledge on how Pucks originated.',
      'Starting a vote inside our community to select a Non-Profit organization, which we will be donating Fiat worth 5 ETH to. (With proof obviously ;) ) creating a special drop connected to the donation theme. Half of it will be given away for free to CP-holders while the other half will be sold normally. As soon as we reach this goal we will also rework this website.',
      'Giving away 10 Puck-eggs. Eggs can be handed in with a Puck-wish which allows the owner to write a list on how his dream Puck looks like. After that the Puck will be designed, released and sent back to that person. Details will follow as soon as we get there.',
      'Another donation… Realization of a club system. Every Puck holder that wants to be a member should be able to join.',
   //   'Creating "Halfway there" Merch and giving it away for free inside the club under fair circumstances. ',
   //   'Will be revealed as soon as we hit 50 %.',
   //   'Not defined yet. Will be chosen with the community if the project becomes a success.',
   //   'Will be revealed as soon as we hit 50 %.',
   //   'Not defined yet. Will be chosen with the community if the project becomes a success.',
   //   'Will be revealed as soon as we hit 50 %.',
        'Will be revealed in the future.'
    ]
  ]

  private AMOUNT_OF_PUCKS_TEXT_INDEX: number = 0;
  private TEXT_INDEX: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.listItems = new Array();
    this.initializeListItem();
  }

  private initializeListItem(): void {
    for (let i = 0; i < this.texts[0].length; i++) {
      this.addItemToList(
        this.createListItem(
          this.texts[this.AMOUNT_OF_PUCKS_TEXT_INDEX][i], 
          this.texts[this.TEXT_INDEX][i]
        )
      )
    }
  }

  private createListItem(amountOfPucksText: string, description: string): ListItem {
    return {
      amountOfPucksText: amountOfPucksText,
      description: description
    };
  }

  private addItemToList(item: ListItem): void {
    this.listItems.push(item);
  }
}
