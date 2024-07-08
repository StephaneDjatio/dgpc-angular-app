import { Component, OnInit } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  private sidenavInstance: any;
  sidenavOpened: boolean = false;

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const sidenavElement = document.getElementById('document-detail-nav') as HTMLElement;
      this.sidenavInstance = M.Sidenav.init(sidenavElement, { 
        edge: 'right', 
        draggable: true, // Activer le déplacement de la Sidenav
        preventScrolling: false, // Autoriser le défilement même si la Sidenav est ouverte
        overlay: false,
        onOpenStart: () => {
          this.removeOverlay();
        },
        onCloseStart: () => {
          this.removeOverlay();
        }
      });
    });
  }

  openLegend() {
    
    this.sidenavOpened = false;
    this.sidenavInstance.open();
    this.toggleSidenav();
  }

  closeSideNav(): void {
    if (this.sidenavInstance) {
      this.sidenavInstance.close();
      this.toggleSidenav();
    }
  }

  removeOverlay(): void {
    const overlay = document.getElementsByClassName('sidenav-overlay');
    if (overlay) {
      // Select all elements with the class name 'example-class'

      // Convert HTMLCollection to an array for easier manipulation
      var elementsArray = Array.from(overlay);

      // Loop through each element and remove it
      elementsArray.forEach(function(element) {
        element.remove();
      });
      // this.overlay.remove();
    }
  }

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
    const mainContent = document.querySelector('.main-content');
    if (this.sidenavOpened ) {
      mainContent!.classList.add('sidenav-open');
    } else {
      mainContent!.classList.remove('sidenav-open');
    }
  }
}
