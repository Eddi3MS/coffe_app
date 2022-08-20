import { parseCookies, setCookie, destroyCookie } from "nookies";
import { IDeliveryDetails } from "../views/Cart/Cart";

class CookiesHandler {
  public static setCookies(address: IDeliveryDetails) {
    setCookie(null, "@coffee", JSON.stringify(address));
  }

  public static getCookies(): any | null {
    const { "@coffee": addressObject } = parseCookies();
    const addressParsed = addressObject
      ? (JSON.parse(addressObject) as IDeliveryDetails)
      : null;
    return addressParsed;
  }

  public static destroyCookies(): void {
    destroyCookie(null, "@coffee");
  }
}

export { CookiesHandler };
