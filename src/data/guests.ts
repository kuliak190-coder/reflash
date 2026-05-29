export type Guest = {
  photo: string;
  name: string;
  caption: string;
};

/**
 * Гости / окружение события. Имена и подписи — плейсхолдеры,
 * легко заменить на реальные данные участниц.
 */
export const guests: Guest[] = [
  { photo: "/IMG_1651.JPEG", name: "Участница", caption: "Система · уровень доступа" },
  { photo: "/IMG_1652.JPEG", name: "Участница", caption: "Масштаб · влияние" },
  { photo: "/IMG_1653.JPEG", name: "Участница", caption: "Переход в новую реальность" },
  { photo: "/IMG_1654.JPEG", name: "Участница", caption: "Сильное окружение" },
  { photo: "/IMG_1655.JPEG", name: "Участница", caption: "Из хаоса — в систему" },
  { photo: "/IMG_1786.JPEG", name: "Участница", caption: "Новый уровень мышления" },
];
