import {
  Version
} from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import {
  escape
} from '@microsoft/sp-lodash-subset';

import styles from './SppnpjscrudWebPart.module.scss';
import * as strings from 'SppnpjscrudWebPartStrings';

export interface ISppnpjscrudWebPartProps {
  listName: string;
}

export default class SppnpjscrudWebPart extends BaseClientSideWebPart < ISppnpjscrudWebPartProps > {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.sppnpjscrud }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Welcome to SharePoint!</span>
              <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
              <p class="${ styles.description }">${escape(this.properties.listName)}</p>

              // buttons
              <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">
              <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
                <button class="${styles.button} create-Button">
                  <span class="${styles.label}">Create item</span>
                </button>
                <button class="${styles.button} read-Button">
                  <span class="${styles.label}">Read item</span>
                </button>
              </div>
            </div>
            <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">
            <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
              <button class="${styles.button} readall-Button">
                <span class="${styles.label}">Read all items</span>
              </button>
            </div>
          </div>
          <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">
            <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
              <button class="${styles.button} update-Button">
                <span class="${styles.label}">Update item</span>
              </button>
              <button class="${styles.button} delete-Button">
                <span class="${styles.label}">Delete item</span>
              </button>
            </div>
          </div>

          <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">
          <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
            <div class="status"></div>
            <ul class="items"><ul>
          </div>
        </div>
      </div>
    </div>`;
              this.setButtonsEventHandlers();
              }

  //Button Event Handlers
  private setButtonsEventHandlers(): void {
    const webPart: SppnpjscrudWebPart = this;
    this.domElement.querySelector('button.create-Button').addEventListener('click', () => { webPart.createItem(); });
    this.domElement.querySelector('button.read-Button').addEventListener('click', () => { webPart.readItem(); });
    //this.domElement.querySelector('button.readall-Button').addEventListener('click', () => { webPart.readItems(); });
    this.domElement.querySelector('button.update-Button').addEventListener('click', () => { webPart.updateItem(); });
    this.domElement.querySelector('button.delete-Button').addEventListener('click', () => { webPart.deleteItem(); });
  }

  private createItem(): void {}
  private readItem(): void {}
  private updateItem(): void {}
  private deleteItem(): void {}


//   <a href="https://aka.ms/spfx" class="${ styles.button }">
//   <span class="${ styles.label }">Learn more</span>
// </a>
protected get dataVersion(): Version {
  return Version.parse('1.0');
}
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [{
        header: {
          description: strings.PropertyPaneDescription
        },
        groups: [{
          groupName: strings.BasicGroupName,
          groupFields: [
            PropertyPaneTextField('listName', {
              label: strings.ListNameFieldLabel
            })
          ]
        }]
      }]
    };
  }
}
