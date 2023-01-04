import { parseCookies, setCookie, destroyCookie } from "nookies";
import { IDeliveryDetails } from "../views/Cart/Cart";

class CookiesHandler {
  public static setCookies(address: IDeliveryDetails) {
    setCookie(null, "@coffee", JSON.stringify(address), {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
  }

  public static getCookies(): IDeliveryDetails | null {
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
