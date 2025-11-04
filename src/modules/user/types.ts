export declare namespace IApi {
  export namespace Single {
    export interface Response {
      data: IEntity.User;
    }
  }

  export interface User {}
}

export declare namespace IEntity {
  export interface User {
    id: number;
    name: string;
    avatar: string;
    createdAt: Date;
    gender: "male" | "female";
  }
}

export declare namespace IQuery {
  export interface Single {
    item: IEntity.User;
  }

  export interface Delete {
    id: number;
  }
}

export declare namespace IForm {
  export interface Create {
    name: string;
    avatar?: string;
    gender: "male" | "female";
    createdAt: Date;
  }

  export interface Update {}
}
