const i18n = jest.requireActual('react-i18next')

module.exports = {
  ...i18n,
  useTranslation: () => ({
    t: (str) => str,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}
