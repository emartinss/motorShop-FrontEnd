import { createContext, useEffect, useState } from "react";
import { IAdsContext, IAdsProvidersProps } from "./@types";
import { api } from "../services/api";
import { IAds, ICreateAds, IEditAds } from "../interfaces/ads/ads.interfaces";

export const AdsContext = createContext({} as IAdsContext);

export const AdsProvider = ({ children }: IAdsProvidersProps) => {
  const [currentId, setCurrentId] = useState(null);
  const [ads, setAds] = useState([]);
  const [userAds, setUserAds] = useState([]);
  const [idAds, setIdAds] = useState(0)
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
    user: { name: "", id: 0, description: "" },
  });
  const token = JSON.parse(localStorage.getItem("@motorShop:token") || "null");
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

  const createAnnouncement = async (formData: ICreateAds) => {
    try {
      const response = await api.post(`announcements`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const editAnnouncement = async (formData: IEditAds) => {
    console.log(String(idAds))
    try {
      const response = await api.patch(`announcements/${String(idAds)}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAds();
  }, []);
  return (
    <AdsContext.Provider
      value={{
        getAds,
        productDetail,
        getUserAds,
        ads,
        adsById,
        currentId,
        userAds,
        setIdAds,
        setCurrentId,
        setAdsById,
        createAnnouncement,
        editAnnouncement,
      }}
    >
      {children}
    </AdsContext.Provider>
  );
};
