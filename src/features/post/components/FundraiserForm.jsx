import './FundraiserForm.css'

const STEPS = [
    { num: 1, label: 'Tell your story' },
    { num: 2, label: 'Set your goal' },
    { num: 3, label: 'Add a photo' },
]

const COPY = {
    create: {
        badge: 'Start a fundraiser',
        badgeClass: '',
        title: 'Launch your cause in minutes',
        subtitle: 'Share your story, set a goal, and start receiving donations from supporters worldwide.',
        submitLabel: 'Publish fundraiser',
        submitClass: '',
        uploadHint: 'JPG or PNG, recommended 1200×630',
    },
    edit: {
        badge: 'Edit fundraiser',
        badgeClass: 'fundraiser-badge-edit',
        title: 'Update your fundraiser',
        subtitle: 'Change your story, goal, or cover photo. Updates will appear on your public page.',
        submitLabel: 'Save changes',
        submitClass: 'fundraiser-submit-btn-edit',
        uploadHint: 'Leave empty to keep your current photo',
    },
}

export default function FundraiserForm({
    mode = 'create',
    title,
    setTitle,
    budget,
    setBudget,
    description,
    setDescription,
    currentContributed,
    file,
    setFile,
    previewUrl,
    existingImageUrl,
    onSubmit,
}) {
    const copy = COPY[mode] || COPY.create
    const displayImage = previewUrl || existingImageUrl

    return (
        <div className="fundraiser-page">
            <div className="fundraiser-page-header animate-fade-in-up">
                <span className={`fundraiser-badge ${copy.badgeClass}`}>{copy.badge}</span>
                <h1>{copy.title}</h1>
                <p>{copy.subtitle}</p>
            </div>

            <div className="fundraiser-steps">
                {STEPS.map((step) => (
                    <div className="fundraiser-step-pill" key={step.num}>
                        <span className="step-num">{step.num}</span>
                        {step.label}
                    </div>
                ))}
            </div>

            <div className="fundraiser-layout">
                <form className="fundraiser-form" onSubmit={onSubmit}>
                    <section className="form-section">
                        <label className="field-label" htmlFor="fundraiser-title">Fundraiser title</label>
                        <input
                            id="fundraiser-title"
                            className="field-input"
                            placeholder="e.g. Help Maria recover from surgery"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </section>

                    <section className="form-section">
                        <label className="field-label" htmlFor="fundraiser-description">Your story</label>
                        <textarea
                            id="fundraiser-description"
                            className="field-textarea story-textarea"
                            placeholder="Explain why you're fundraising and how donations will be used..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                        <span className="field-hint">{description.length} characters · Be clear and honest</span>
                    </section>

                    <section className="form-section">
                        <label className="field-label" htmlFor="fundraiser-budget">Fundraising goal ($)</label>
                        <input
                            disabled= {mode==="edit"&&true}
                            id="fundraiser-budget"
                            className="field-input"
                            type="number"
                            min="1"
                            placeholder="5000"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            required
                        />
                    </section>

                    <section className="form-section">
                        <label className="field-label">Cover photo</label>
                        <label className="upload-zone">
                            <input
                                type="file"
                                accept="image/*"
                                className="upload-input"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                            <span className="upload-icon">📷</span>
                            <span className="upload-text">
                                {file ? file.name : 'Click to upload or drag an image'}
                            </span>
                            <span className="upload-hint">{copy.uploadHint}</span>
                        </label>
                    </section>

                    <button
                        type="submit"
                        className={`fundraiser-submit-btn ${copy.submitClass}`}
                    >
                        {copy.submitLabel}
                    </button>
                </form>

                <aside className="fundraiser-preview-panel">
                    <h3 className="preview-heading">Live preview</h3>
                    <div className="preview-card">
                        <div className="preview-image-wrap">
                            {displayImage ? (
                                <img src={displayImage} alt="Preview" className="preview-image" />
                            ) : (
                                <div className="preview-placeholder">Your photo here</div>
                            )}
                        </div>
                        <h4 className="preview-title">{title || 'Your fundraiser title'}</h4>
                        <p className="preview-desc">
                            {description
                                ? description.slice(0, 140) + (description.length > 140 ? '...' : '')
                                : 'Your story will appear here so donors understand your cause.'}
                        </p>
                        {mode =="edit" &&
                        <>
                        <div className="preview-progress-track">
                            <div className="preview-progress-fill" style={{ width: `${currentContributed*100/budget}%` }} />
                        </div>
                        <div className="preview-goal">
                            <strong>${currentContributed}</strong>
                            <span> raised of {budget ? `$${Number(budget).toLocaleString()}` : '$0'} goal</span>
                        </div>
                        </>
                        }
                    </div>
                    <ul className="preview-tips">
                        <li>Use a clear, emotional photo</li>
                        <li>Explain exactly how funds will be used</li>
                        <li>Set a realistic, achievable goal</li>
                    </ul>
                </aside>
            </div>
        </div>
    )
}
