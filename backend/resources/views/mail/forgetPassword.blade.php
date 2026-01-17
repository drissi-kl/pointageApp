<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { 
            background-color: #0f172a; 
            margin: 0; padding: 0; 
            font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
        }
        .container {
            max-width: 500px;
            margin: 50px auto;
            background: #1e293b;
            border-radius: 12px;
            border: 1px solid #334155;
            overflow: hidden;
            color: #f1f5f9;
        }
        .accent-bar {
            height: 4px;
            /* Gradient changed to a "Security Blue/Purple" */
            background: linear-gradient(90deg, #6366f1, #a855f7);
        }
        .content {
            padding: 40px;
            text-align: center;
        }
        .app-name {
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 3px;
            color: #94a3b8;
            margin-bottom: 40px;
        }
        h1 {
            font-size: 26px;
            font-weight: 800;
            margin-bottom: 10px;
            color: #ffffff;
        }
        .code-box {
            margin: 40px 0;
            padding: 25px;
            background: #0f172a;
            border-radius: 16px;
            border: 1px solid #6366f1;
            box-shadow: 0 0 25px rgba(99, 102, 241, 0.15);
        }
        .code {
            font-size: 48px;
            font-weight: 900;
            color: #818cf8;
            letter-spacing: 12px;
            margin-left: 12px;
        }
        .instruction {
            color: #94a3b8;
            font-size: 15px;
            line-height: 1.6;
        }
        .footer {
            padding: 30px;
            background: #111827;
            text-align: center;
            font-size: 12px;
            color: #475569;
        }
        .security-note {
            margin-top: 25px;
            padding-top: 25px;
            border-top: 1px solid #334155;
            font-size: 13px;
            color: #64748b;
        }
        .highlight {
            color: #f1f5f9;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="accent-bar"></div>
        <div class="content">
            <div class="app-name">{{ config('app.name') }}</div>
            
            <h1>Reset Your Password</h1>
            <p class="instruction">
                We received a request to reset your password. Use the verification code below to proceed with the recovery process.
            </p>
            
            <div class="code-box">
                <div class="code">{{ $user->code }}</div>
            </div>

            <p class="instruction">
                This recovery code is valid for <span class="highlight">15 minutes</span>.
            </p>

            <div class="security-note">
                <strong>Didn't request this?</strong><br>
                If you didn't try to reset your password, you can safely ignore this email. Your account is still secure.
            </div>
        </div>
        <div class="footer">
            &copy; {{ date('Y') }} {{ config('app.name') }} Security Systems.
        </div>
    </div>
</body>
</html>