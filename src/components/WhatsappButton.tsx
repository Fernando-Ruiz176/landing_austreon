import './WhatsappButton.css'

// Número de WhatsApp de la empresa (no un piloto puntual). Formato E.164 sin "+" ni espacios, como lo pide wa.me.
const PHONE = '56964985161'
const MESSAGE = 'Hola, quiero saber más sobre Austreon.'

export default function WhatsappButton() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`

  return (
    <div className="wa-wrap">
      <div className="wa-tooltip">
        <p className="wa-tooltip-title">¿Tenés dudas?</p>
        <p className="wa-tooltip-sub">Hablemos por WhatsApp</p>
        <span className="wa-tooltip-arrow" />
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="wa-button"
      >
        <span className="wa-ping" aria-hidden="true" />
        <svg viewBox="0 0 24 24" className="wa-icon" aria-hidden="true">
          <path
            fill="currentColor"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 22h-.005a9.951 9.951 0 01-5.09-1.395l-.365-.217-3.786.993 1.011-3.693-.238-.379a9.976 9.976 0 01-1.528-5.323C2.05 6.593 6.643 2 12.056 2 14.68 2 17.147 3.023 19 4.877c1.853 1.853 2.875 4.32 2.874 6.943-.003 5.412-4.596 10.003-9.824 10.003zm8.339-18.336A11.815 11.815 0 0012.056 0C5.55 0 .253 5.298.256 11.806a11.784 11.784 0 001.581 5.916L.052 24l6.435-1.688a11.878 11.878 0 005.556 1.416h.005c6.505 0 11.803-5.299 11.805-11.807a11.735 11.735 0 00-3.464-8.336z"
          />
        </svg>
      </a>
    </div>
  )
}
