export default function FormField({ id, label, type='text', required=false, help, ...props }) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}{required ? ' *' : ''}</label>
      {type === 'textarea' ? (
        <textarea id={id} name={id} required={required} {...props}></textarea>
      ) : (
        <input id={id} name={id} type={type} required={required} {...props} />
      )}
      {help && <div className="help">{help}</div>}
    </div>
  )
}
