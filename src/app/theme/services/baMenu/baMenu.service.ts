import { GlobalState } from '../../../global.state';
import {Injectable} from '@angular/core';
import {Router, Routes} from '@angular/router';
import * as _ from 'lodash';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class   BaMenuService {
  menuItems = new BehaviorSubject<any[]>([]);

  protected _currentMenuItem = {};

  currentUser; any;

  constructor(private _router:Router) { 

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // if(this.currentUser===null){
    //   this._router.navigate(['/login']);
    // }

  }

  /**
   * Updates the routes in the menu
   *
   * @param {Routes} routes Type compatible with app.menu.ts
   */
  public updateMenuByRoutes(routes: Routes) {
    let convertedRoutes = this.convertRoutesToMenus(_.cloneDeep(routes));
    // console.log(convertedRoutes);
    
    this.menuItems.next(convertedRoutes);
  }

  public convertRoutesToMenus(routes:Routes):any[] {
    let items = this._convertArrayToItems(routes);
    return this._skipEmpty(items);
  }

  public getCurrentItem():any {
    return this._currentMenuItem;
  }

  public selectMenuItem(menuItems:any[]):any[] {
    let items = [];
    // console.log(menuItems);
    menuItems.forEach((item) => {
      this._selectItem(item);
      // console.log(item);
      if (item.selected) {
        this._currentMenuItem = item;
      }

      if (item.children && item.children.length > 0) {
        item.children = this.selectMenuItem(item.children);
      }

      if(item.userType === this.currentUser.user.role || item.userType === '')
        items.push(item);
    });
    // console.log(items);
    return items;
  }

  protected _skipEmpty(items:any[]):any[] {
    let menu = [];
    items.forEach((item) => {
      let menuItem;
      if (item.skip) {
        if (item.children && item.children.length > 0) {
          menuItem = item.children;
        }
      } else {
        menuItem = item;
      }

      if (menuItem) {
        menu.push(menuItem);
      }
    });

    return [].concat.apply([], menu);
  }

  protected _convertArrayToItems(routes:any[], parent?:any):any[] {
    let items = [];
    routes.forEach((route) => {
      items.push(this._convertObjectToItem(route, parent));
    });
    return items;
  }

  protected _convertObjectToItem(object, parent?:any):any {
    let item:any = {};
    if (object.data && object.data.menu) {
      // this is a menu object
      item = object.data.menu;
      item.route = object;
      delete item.route.data.menu;
    } else {
      item.route = object;
      item.skip = true;
    }

    // we have to collect all paths to correctly build the url then
    if (Array.isArray(item.route.path)) {
      item.route.paths = item.route.path;
    } else {
      item.route.paths = parent && parent.route && parent.route.paths ? parent.route.paths.slice(0) : ['/'];
      if (!!item.route.path) item.route.paths.push(item.route.path);
      // console.log(item.route.paths);
    }

    if (object.children && object.children.length > 0) {
      item.children = this._convertArrayToItems(object.children, item);
    }

    let prepared = this._prepareItem(item);

    // if current item is selected or expanded - then parent is expanded too
    if ((prepared.selected || prepared.expanded) && parent) {
      parent.expanded = true;
    }
    //console.log(prepared);
    return prepared;
  }

  protected _prepareItem(object:any):any {
    if (!object.skip) {
      object.target = object.target || '';
      object.pathMatch = object.pathMatch  || 'full';
      return this._selectItem(object);
    }

    return object;
  }

  protected _selectItem(object:any):any {
    object.selected = this._router.isActive(this._router.createUrlTree(object.route.paths), object.pathMatch === 'full');
    return object;
  }
}
