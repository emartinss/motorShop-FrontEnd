import { createContext, useEffect, useState } from "react";
import { IAdsContext, IAdsProvidersProps } from "./@types";
import { api } from "../services/api";
import { IAds } from "../interfaces/ads/ads.interfaces";

export const AdsContext = createContext({} as IAdsContext);

export const AdsProvider = ({ children }: IAdsProvidersProps) => {
  const [currentId, setCurrentId] = useState(null);
  const [ads, setAds] = useState([]);
  const [userAds, setUserAds] = useState([]);
  const [adsById, setAdsById] = useState<IAds>({
    id: 0,
    brand: "",
    model: "",
    year: "",
    fuel: "",
    mileage: 0,
    color: "",
    fipe: 0,
    price: 0,
    description: "",
    image: [],
    user: { name: "", id: 0 },
  });
  const token = localStorage.getItem("@motorShop:token");

  const getAds = async () => {
    try {
      const response = await api.get("/announcements");
      setAds(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const productDetail = async (id: string) => {
    try {
      const response = await api.get(`announcements/${id}`);
      setAdsById(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserAds = async (id: string) => {
    try {
      const response = await api.get(`announcements/advertiser/${id}`);
      setUserAds(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getAds();
  }, []);
  return (
    <AdsContext.Provider value={{ getAds, productDetail, getUserAds, ads, adsById, currentId, userAds, setCurrentId, setAdsById }}>
      {children}
    </AdsContext.Provider>
  );
};
