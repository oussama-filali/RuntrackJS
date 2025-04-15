function jsonValueKey(jsonStr, key) {
    try {
      const obj = JSON.parse(jsonStr);
      return obj[key] ?? "Clé non trouvée.";
    } catch (e) {
      return "JSON invalide.";
    }
  }
  