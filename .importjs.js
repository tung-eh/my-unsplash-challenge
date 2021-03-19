module.exports = {
  aliases: {
    tw: 'twin.macro',
  },
  namedExports: {
    react: [
      'useState',
      'useReducer',
      'useEffect',
      'useLayoutEffect',
      'useContext',
      'useRef',
      'useCallback',
      'useMemo',
      'forwardRef',
      'createContext',
      'cloneElement',
      'memo',
    ],
    'twin.macro': ['css', 'styled'],
    'react-hook-form': ['useForm'],
    'framer-motion': ['AnimateSharedLayout', 'AnimatePresence', 'motion'],
  },
}
